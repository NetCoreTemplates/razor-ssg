---
title: Next.js React Server Components - Secure Design
summary: How the Next.js RSC template architecture protects against React Server Components vulnerabilities through process isolation and defense-in-depth security
tags: [react,nextjs,security]
author: Gayle Smith
image: https://servicestack.net/img/posts/nextjs-rsc-secure-design/bg.webp
---

In the face of recent back-to-back critical vulnerabilities that have plagued Next.js React Server Components - including three CVEs with severity scores reaching the maximum CVSS 10.0 - we felt it essential to explain how our only template that utilizes React Server Components, [Next.js RSC](https://react-templates.net/docs/templates/next-rsc) was architected to be **secure by design** by employing a **defense-in-depth architecture** that makes entire classes of attacks like these CVEs physically impossible. 

:::info
All other [React and Next.js templates](https://react-templates.net) utilize static rendering and doesn't use a Node runtime in production at all
:::

The [Next.js RSC](https://react-templates.net/docs/templates/next-rsc) template leverages Next.js React Server Components as a **pure rendering layer**, gaining the benefits of server-side rendering: improved performance, SEO, and reduced client bundle sizes - without the security risks inherent to fullstack Next.js applications.

Unlike traditional fullstack Next.js apps that use (`'use server'`) Server Functions to directly handle data operations, the [next-rsc](https://next-rsc.react-templates.net) template routes all data access through type-safe **ServiceStack .NET APIs**. Next.js serves exclusively as the presentation layer, never touching databases, secrets, or business logic directly.

This architectural decision makes the template **immune to React Server Components vulnerabilities**. Since it doesn't use the vulnerable Server Functions feature, the primary attack vector doesn't exist. Combined with process-level isolation between the Node.js and .NET layers, even future vulnerabilities in Next.js cannot compromise your application's data or infrastructure.

## Security by Design

This document details how the [Next.js RSC](https://react-templates.net/docs/templates/next-rsc) project template is architected to be **immune to React Server Components vulnerabilities** through:

1. **No Server Functions** - The primary attack vector doesn't exist
2. **Process Isolation** - Node.js runs as unprivileged user with no access to .NET resources
3. **File System Permissions** - .NET configuration and code cannot be read or modified
4. **Environment Separation** - Secrets never reach the Node.js process
5. **Automated Testing** - Security boundaries are continuously verified

Even if you accidentally introduce Server Functions or a new vulnerability is discovered, the infrastructure limits the damage. An attacker with full code execution in Node.js still cannot:
- Read database credentials
- Access configuration files
- Steal API keys or licenses
- Modify .NET code
- Persist backdoors

This **security by design** architecture physically prevents entire classes of attacks, making your application resilient against both known and future vulnerabilities.

## Critical Vulnerabilities in React Server Components

In December 2025, React disclosed three critical vulnerabilities in React Server Components with severity scores reaching CVSS 10.0 - the highest possible rating. These vulnerabilities enable remote code execution, denial of service, and source code exposure in applications using React Server Functions.
 - [Denial of Service and Source Code Exposure in React Server Components](https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components)
 - [Critical Security Vulnerability in React Server Components](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components)

This Next.js + .NET template is **architected to be immune to these vulnerabilities** through a combination of secure design patterns and infrastructure-level isolation. Even if similar vulnerabilities are discovered in the future, the blast radius is minimized by design.

## Understanding the Vulnerabilities

The React Server Components vulnerabilities exploit a fundamental weakness: **Server Functions** (`'use server'`) that deserialize untrusted client input can be manipulated to:

- [CVE-2025-55182 (CVSS 10.0)](https://www.cve.org/CVERecord?id=CVE-2025-55182): Execute arbitrary code on the server
- [CVE-2025-55184/67779 (CVSS 7.5)](https://www.cve.org/CVERecord?id=CVE-2025-55184): Cause infinite loops that hang the server
- [CVE-2025-55183 (CVSS 5.3)](https://www.cve.org/CVERecord?id=CVE-2025-55183): Leak source code and potentially hardcoded secrets

The attack requires no authentication and can be triggered by a single malicious HTTP request.

## Two Layers of Protection

This template employs a **defense-in-depth approach** with two independent security layers:

### Primary Defense: No Server Functions

The template **does not use React Server Functions** at all, eliminating the primary attack vector. Instead, all data operations flow through type-safe ServiceStack APIs:

```typescript
// ❌ Vulnerable pattern (not used in this template)
'use server'
export async function createBooking(data: Booking) {
  const db = await getDatabase()  // Direct database access from React
  return db.bookings.create(data)
}
```

```typescript
// ✅ Secure pattern (how this template works)
import { client } from '@/lib/gateway'
import { CreateBooking } from '@/lib/dtos'

export async function createBooking(data: Booking) {
  // Type-safe API call to .NET backend
  return await client.api(new CreateBooking(data))
}
```

All mutations and data access happen in .NET ServiceStack APIs with proper authentication, validation, and authorization - never directly in React components.

### Secondary Defense: Process Isolation

Even if Server Functions were accidentally introduced or a new vulnerability discovered, the template's infrastructure limits the damage through **container-level isolation**:

![](https://docs.servicestack.net/img/pages/react/info/next-rsc-security.svg)

The Node.js process runs as an unprivileged user (`nextjs`) with no access to .NET resources. Even with full code execution in Node.js, an attacker **cannot**:

| Resource | Node.js Access | Result |
|----------|----------------|------------|
| Database Connection String | ❌ No access | ✅ Protected |
| `appsettings.json` | ❌ Permission denied | ✅ Protected |
| .NET Assembly Files | ❌ Permission denied | ✅ Protected |
| `App_Data` Directory | ❌ Permission denied | ✅ Protected |
| Confidential Environment Variables | ❌ Not in environment | ✅ Protected |
| .NET Process Memory | ❌ Separate process | ✅ Protected |
| API Endpoints | ✅ Can Call via HTTP | ⚠️ By Design |
| RSC Render Data | ✅ Can Access | ⚠️ By Design |

## React Server Components Vulnerability Analysis

### Recent Critical Vulnerabilities

1. **CVE-2025-55182** - Remote Code Execution (CVSS 10.0)
2. **CVE-2025-55184 / CVE-2025-67779** - Denial of Service (CVSS 7.5)
3. **CVE-2025-55183** - Source Code Exposure (CVSS 5.3)

### Primary Protection: No Server Functions 

This template **does NOT use React Server Functions** (`'use server'`), eliminating the primary attack vector.

```typescript
// ❌ Don't use server functions - Creates a potential vulnerability surface
'use server'
export async function createUser(name: string) {
  const db = await getDatabase()  // Vulnerable!
  return db.users.create({ name })
}
```

```typescript
// ✅ Instead use .NET APIs for any access to data or resources
import { client } from '@/lib/gateway'
import { CreateUser } from '@/lib/dtos'

export async function createUser(name: string) {
  return await client.api(new CreateUser({ name }))
}
```

### Secondary Protection: Process Isolation (Defense in Depth) 

Even if Server Functions were accidentally added or a new vulnerability discovered:

**CVE-2025-55182 (RCE) Impact:**
- ✅ Attacker cannot read database credentials
- ✅ Attacker cannot access .NET configuration
- ✅ Attacker cannot modify .NET code
- ⚠️ Attacker can make API calls (must secure APIs with authentication)

**CVE-2025-55183 (Source Exposure) Impact:**
- ✅ No database credentials in source code to leak
- ✅ No ServiceStack license in environment to expose
- ✅ No .NET secrets accessible to Node.js

**CVE-2025-55184/67779 (DoS) Impact:**
- ⚠️ Node.js process can hang (UI unavailable)
- ✅ .NET process unaffected (APIs remain functional)
- ✅ Cannot consume .NET CPU/memory

## Implementation Details

### 1. File System Isolation

**Dockerfile Configuration:**

```dockerfile
# Create unprivileged user for Next.js
RUN groupadd -r nextjs && useradd -r -g nextjs -s /bin/bash nextjs

# .NET files: owned by root, mode 700 (rwx------)
COPY --from=dotnet-build /src/MyApp/bin/Release/net10.0/publish ./dotnet
RUN chmod -R 700 ./dotnet && chown -R root:root ./dotnet

# Node.js files: owned by nextjs user, mode 500 (r-x------)
COPY --from=dotnet-build /src/MyApp.Client ./nextjs
RUN chown -R nextjs:nextjs ./nextjs && chmod -R 500 ./nextjs

# Temporary directory for Next.js cache
RUN mkdir -p /tmp && chmod 1777 /tmp
```

**Verification:**

```bash
# Inside container as nextjs user
cat /app/dotnet/appsettings.json
# Permission denied 

cat /app/nextjs/package.json
# Success 
```

### 2. Environment Variable Isolation

**Entrypoint Configuration:**

```bash
# Start Node.js with minimal environment using su
cd /app/nextjs && su nextjs -s /bin/bash -c "
export HOME=/tmp
export NODE_ENV=production
export NEXT_PORT=${NEXT_PORT}
export INTERNAL_API_URL=${INTERNAL_API_URL:-http://127.0.0.1:8080}
export KAMAL_DEPLOY_HOST=${KAMAL_DEPLOY_HOST}
export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
cd /app/nextjs
npm run start -- --port ${NEXT_PORT}
" &
```

**Environment Variables Available to Node.js:**

| Variable | Value | Safe? | Purpose |
|----------|-------|-------|---------|
| `NODE_ENV` | `production` | ✅ Yes | Next.js mode |
| `NEXT_PORT` | `3000` | ✅ Yes | Port number |
| `INTERNAL_API_URL` | `http://127.0.0.1:8080` | ✅ Yes | API endpoint |
| `KAMAL_DEPLOY_HOST` | Public hostname | ✅ Yes | Public info |
| `PATH` | Standard paths | ✅ Yes | Binary paths |
| `HOME` | `/tmp` | ✅ Yes | Temp directory |

Only the allowlisted variables above are exported; **no other confidential environment variables are available to Next.js**.



**Verification:**

```bash
# Check Node.js process environment
NODE_PID=$(pgrep -f "npm run start")
cat /proc/$NODE_PID/environ | tr '\0' '\n'

# Expected output:
# HOME=/tmp
# NODE_ENV=production
# NEXT_PORT=3000
# INTERNAL_API_URL=http://127.0.0.1:8080
# ...
# (NO SERVICESTACK_LICENSE) 
```

### 3. Process User Isolation

```bash
# .NET runs as root with full privileges
ASPNETCORE_CONTENTROOT="/app/dotnet" dotnet /app/dotnet/MyApp.dll &

# Node.js runs as nextjs user with restricted privileges
su -s /bin/bash nextjs -c "npm run start ..." &
```

**Process Verification:**

```bash
ps aux | grep -E "dotnet|node"
# root    123  ... dotnet /app/dotnet/MyApp.dll
# nextjs  456  ... npm run start
```

### 4. Read-Only Application Files

The `/app/nextjs` directory is mounted with `r-x` (500) permissions, preventing:
- Modification of application code
- Writing malicious payloads to disk
- Persisting backdoors across restarts

```bash
# As nextjs user
echo "malicious" > /app/nextjs/backdoor.js
# Permission denied 
```

## Verified Security

The template includes an [automated security test suite](https://github.com/NetCoreTemplates/next-rsc/blob/main/test-isolation.sh) that verifies all isolation guarantees:

```bash
# Build and start container
docker build -t next-rsc .
docker run -d -p 5001:8080 --name next-rsc-test next-rsc

# Run security tests
./test-isolation.sh
```

**Test Coverage:**

1.  File system isolation (**nextjs** user cannot read `/app/dotnet`)
2.  Environment variable isolation (sensitive vars not exposed)
3.  Process user isolation (different UIDs)
4.  Write protection (cannot modify files)

### Manual Testing

```bash
CONTAINER=$(docker ps -q -f "name=next-rsc-test")

# Test 1: File access
docker exec -u nextjs $CONTAINER cat /app/dotnet/appsettings.json
# Expected: Permission denied

# Test 2: Directory listing
docker exec -u nextjs $CONTAINER ls /app/dotnet
# Expected: Permission denied

# Test 3: Environment variables
NODE_PID=$(docker exec $CONTAINER pgrep -f "npm run start" | head -1)
docker exec $CONTAINER cat /proc/$NODE_PID/environ | tr '\0' '\n' | grep SERVICESTACK
# Expected: No output (not present)

# Test 4: Write attempt
docker exec -u nextjs $CONTAINER sh -c 'echo "test" > /app/dotnet/malicious.txt'
# Expected: Permission denied

# Test 5: Own files accessible
docker exec -u nextjs $CONTAINER cat /app/nextjs/package.json
# Expected: Success
```

## Best Practices

### Development Guidelines

####  DO

1. **Keep all data operations in ServiceStack APIs**
   ```typescript
   // Good: API call from React component
   const api = await client.api(new CreateBooking({ ... }))
   ```

2. **Use typed ServiceStack client**
   ```typescript
   import { client } from '@/lib/gateway'
   import { QueryBookings } from '@/lib/dtos'
   ```

3. **Protect APIs with authentication**
   ```csharp
   [ValidateIsAuthenticated]
   [ValidateHasRole("Employee")]
   public class CreateBooking : ICreateDb<Booking> { }
   ```

4. **Store secrets in .NET configuration**
   ```csharp
   // In Configure.Db.cs - NOT accessible to Node.js
   var connStr = Configuration.GetConnectionString("DefaultConnection");
   ```

5. **Use environment variables for deployment secrets**
   ```yaml
   # config/deploy.yml
   env:
     secret:
       - SERVICESTACK_LICENSE
   ```

#### ❌ DON'T

1. **Never use React Server Functions**
   ```typescript
   // NEVER DO THIS
   'use server'
   export async function serverAction() { }
   ```

2. **Never commit secrets to git**
   ```json
   // ❌ Bad: Committed to repo in git
   // MyApp/appsettings.json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=prod;Password=secret123"
     }
   }
   ```

   Use GitHub Secrets, environment variables, or secret managers instead, see [Secret Management](#secret-management).

3. **Never expose sensitive data via environment variables to Node.js**
   ```bash
   # ❌ Bad: Would expose to Node.js
   env -i ... DATABASE_PASSWORD="${DATABASE_PASSWORD}" ...
   ```

4. **Never disable isolation "for convenience"**
   ```dockerfile
   # ❌ Bad: Removes security
   # RUN chmod 777 /app/dotnet
   ```

### Code Review Checklist

Before merging code:

- [x] No `'use server'` directives anywhere in codebase
- [x] All data mutations use ServiceStack APIs
- [x] **No secrets committed to git** (use GitHub Secrets or environment variables)
- [x] No secrets passed to Node.js environment
- [x] API endpoints have proper authentication
- [x] Tests verify isolation is working
- [x] Production secrets managed via GitHub Secrets, environment variables, or secret manager

## Secret Management

The template includes built-in support for managing production App settings whilst maintaining the Node.js isolation guarantees:

### Workflow: Development to Production

Run the `secret:prod` npm script to securely store your production configuration in GitHub Actions:

```bash
npm run secret:prod
```

This uses the GitHub CLI to add your `appsettings.Production.json` to your GitHub repository's Action secrets:

```bash
gh secret set APPSETTINGS_JSON < appsettings.Production.json
```

**How It Works:**

1. **Development** - Create `appsettings.Production.json` locally with your production configuration
2. **Upload** - Run `npm run secret:prod` to store it as a GitHub Action secret (never committed to git)
3. **Deployment** - GitHub Actions injects the secret as the `APPSETTINGS_JSON_BASE64` environment variable
4. **Runtime** - The container startup script decodes and writes it to `/app/dotnet/appsettings.Production.json`
5. **Isolation** - The file is written with root-only permissions, preventing Node.js access

Configuration in [config/deploy.yml](https://github.com/NetCoreTemplates/next-rsc/blob/main/config/deploy.yml):

```yaml
# config/deploy.yml
env:
  secret:
    - APPSETTINGS_JSON_BASE64  # Base64-encoded production config
```

**Benefits:**
- Secrets never committed to git repository
- Secrets never baked into Docker image layers
- Same Docker image can be used across all environments
- Production configuration remains isolated from Node.js process

---

### Learn More

- Run the [Automated Security Test Suite](https://github.com/NetCoreTemplates/next-rsc/blob/main/test-isolation.sh)
- Explore the [next-rsc GitHub Repository](https://github.com/NetCoreTemplates/next-rsc)
