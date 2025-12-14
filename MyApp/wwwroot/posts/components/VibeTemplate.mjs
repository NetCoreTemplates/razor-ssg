import { computed } from "vue"
import CopyBlock from "./CopyBlock.mjs"

export default {
    components: { CopyBlock },
    template: `
    <div :class="['mb-16 not-prose flex flex-col gap-16 items-center']">
      <div class="flex-1 space-y-8 text-left">
        <a :href="href" class="group inline-block">
          <h3 class="text-4xl font-bold group-hover:text-primary transition-colors flex items-center gap-3">
            {{title}}
            <svg class="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </h3>
        </a>
        <p class="text-lg text-muted-foreground leading-relaxed">{{description}}</p>

      <div class="flex-1 w-full space-y-6">
        <CopyBlock v-if="command" class="w-full">
          {{command}}
        </CopyBlock>

        <div v-if="githubTemplate" class="mt-4 p-4 bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-gray-900 dark:text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <div class="flex-1">
              <p class="text-sm font-semibold text-gray-900 dark:text-white mb-1">Jumpstart with Copilot</p>
              <p class="text-xs text-gray-600 dark:text-gray-400 mb-2">
                Instantly scaffold a new App with this template using GitHub Copilot, just describe the features you want and watch Copilot build it!
              </p>
              <a
                :href="githubTemplate"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-3 py-1.5 bg-[#24292f] hover:bg-[#1b1f23] dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium rounded-md transition-colors shadow-sm"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Create from Template
                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <a :href="href" class="block relative rounded-2xl overflow-hidden shadow-2xl border-4 border-muted/20 bg-muted group hover:border-primary/30 transition-colors duration-300">
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10" />
          <img
            :src="screenshot"
            :alt="title + ' Screenshot'"
            class="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
          />
        </a>
      </div>
        <div class="mt-6 not-prose flex flex-col items-center gap-3">
            <a :href="liveDemoHref" class="text-sm text-muted-foreground font-mono">{{ liveDemoHref.substring(8) }}</a>
            <div class="flex flex-wrap justify-center gap-4">
            <a :href="liveDemoHref"
               class="group inline-flex items-center gap-2 px-4 py-2 bg-[#61DAFB] hover:bg-[#4fa8c7] text-gray-900 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>Live Demo</span>
                <svg class="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
            <a :href="'https://github.com/NetCoreTemplates/' + template"
               class="group inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>Source Code</span>
                <svg class="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
            </div>
        </div>
    </div>
  </div>
    `,
    props: {
        template: String,
        title: String,
        description: String,
        href: String,
        screenshot: String,
        command: String,
        githubTemplate: String,
        reversed: { type: Boolean, default: false }
    },
    setup(props) {
        const command = computed(() => `npx create-net ${props.template} MyProject`)

        const reactTemplates = [
          'react-static',
          'react-spa',
          'nextjs',
          'next-rsc',
          'next-static',
        ]

        const liveDemoHref = computed(() => 
          'https://' + props.template + (reactTemplates.includes(props.template) 
            ? '.react-templates.net' 
            : '.web-templates.io'))

        return { 
            command,
            liveDemoHref,
        }
    }
}
