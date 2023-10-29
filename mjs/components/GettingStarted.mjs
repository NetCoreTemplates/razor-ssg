import { ref, computed } from "vue"
import ShellCommand from "./ShellCommand.mjs"

export default {
    components: {
        ShellCommand,
    },
    template:/*html*/`
    <div class="flex flex-col w-96">
        <h4 class="py-6 text-center text-xl">Create New Project</h4>

      <input type="text" v-model="project" autocomplete="off" spellcheck="false" @keydown="validateSafeName"
             class="mb-8 sm:text-lg rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:bg-gray-800"/>

        <section class="w-full flex justify-center text-center">
           <div class="mb-2">
              <div class="flex justify-center text-center">
                 <a class="archive-url hover:no-underline netcoretemplates_empty" :href="zipUrl('NetCoreTemplates/razor-ssg')">
                    <div class="bg-white dark:bg-gray-800 px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl dark:border-2 dark:border-pink-600 dark:hover:border-blue-600 dark:border-2 dark:border-pink-600 dark:hover:border-blue-600" style="min-width:150px">
                       <div class="text-center font-extrabold flex items-center justify-center mb-2">
                          <div class="text-4xl text-blue-400 my-3">
                             <svg class="w-12 h-12 text-indigo-600" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M23.844 27.692a16.332 16.332 0 0 1-6.645 1.3q-6.364 0-10.013-3.243a11.3 11.3 0 0 1-3.649-8.9a13.716 13.716 0 0 1 3.785-9.898A12.716 12.716 0 0 1 16.9 3.008a11.676 11.676 0 0 1 8.425 3.006a9.994 9.994 0 0 1 3.142 7.533a10.187 10.187 0 0 1-2.318 7.114a7.532 7.532 0 0 1-5.817 2.547a2.613 2.613 0 0 1-1.845-.642a2.323 2.323 0 0 1-.764-1.6a4.9 4.9 0 0 1-4.148 2.243a4.6 4.6 0 0 1-3.507-1.479a5.706 5.706 0 0 1-1.384-4.063a9.913 9.913 0 0 1 2.2-6.357q2.2-2.763 4.8-2.763a5.063 5.063 0 0 1 4.256 1.716l.311-1.338h2.405l-2.081 9.08a10.716 10.716 0 0 0-.352 2.243q0 .972.744.972a4.819 4.819 0 0 0 3.877-2.047a8.93 8.93 0 0 0 1.621-5.681a7.98 7.98 0 0 0-2.675-6.175a9.887 9.887 0 0 0-6.919-2.432a10.6 10.6 0 0 0-8.158 3.467a12.066 12.066 0 0 0-3.2 8.495a9.561 9.561 0 0 0 3.06 7.573q3.06 2.7 8.586 2.7a13.757 13.757 0 0 0 5.675-1.054ZM19.466 12.25a3.977 3.977 0 0 0-3.6-1.716q-1.824 0-3.263 2.23a8.726 8.726 0 0 0-1.439 4.824q0 3.635 2.905 3.635a3.771 3.771 0 0 0 2.651-1.183a6.309 6.309 0 0 0 1.7-3.2Z"></path></svg>
                          </div>
                       </div>
                       <div class="text-xl font-medium text-gray-700">Razor SSG</div>
                       <div class="flex justify-center h-8"></div>
                       <span class="archive-name px-4 pb-2 text-blue-600 dark:text-indigo-400">{{ projectZip }}</span>
                       <div class="count mt-1 text-gray-400 text-sm"></div>
                    </div>
                 </a>
              </div>
           </div>
        </section>

      <ShellCommand class="mb-2">dotnet tool install -g x</ShellCommand>
      <ShellCommand class="mb-2">x new {{template}} {{project}}</ShellCommand>

      <h4 class="py-6 text-center text-xl">In <span class="font-semibold text-indigo-700">/MyApp</span>, Run Tailwind</h4>
      <ShellCommand class="mb-2">npm run ui:dev</ShellCommand>

      <h4 class="py-6 text-center text-xl">Run .NET Project (New Terminal)</h4>
      <ShellCommand class="mb-2">dotnet watch</ShellCommand>

    </div>`,
    props: { template:String },
    setup(props) {
        const project = ref('ProjectName')

        const projectZip = computed(() => (project.value || 'MyApp') + '.zip')

        /** @param {string} template */
        const zipUrl = (template) =>
            `https://account.servicestack.net/archive/${template}?Name=${project.value || 'MyApp'}`

        /** @param {KeyboardEvent} e */
        const isAlphaNumeric = (e) => {
            const c = e.charCode;
            if (c >= 65 && c <= 90 || c >= 97 && c <= 122 || c >= 48 && c <= 57 || c === 95) //A-Za-z0-9_
                return;
            e.preventDefault()
        }

        /** @param path {string}
          * @returns {string} */
        const resolvePath = (path) => navigator.userAgent.indexOf("Win") >= 0 ? path.replace(/\//g,'\\') : path
        const uiPath = () => resolvePath(`ui`)
        const apiPath = () => resolvePath(`api/${project.value}`)

        /** @param e {KeyboardEvent} */
        function validateSafeName(e) {
            if (e.key.match(/[\W]+/g)) {
                e.preventDefault()
                return false
            }
        }
        return { project, projectZip, zipUrl, isAlphaNumeric, uiPath, apiPath, validateSafeName }
    }
}