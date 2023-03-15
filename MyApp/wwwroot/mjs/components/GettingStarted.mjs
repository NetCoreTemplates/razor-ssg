import { ref } from "vue"
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

      <ShellCommand class="mb-2">dotnet tool install -g x</ShellCommand>
      <ShellCommand class="mb-2">x new {{template}} {{project}}</ShellCommand>

      <h4 class="py-6 text-center text-xl">In <span class="font-semibold text-indigo-700">/MyApp</span>, Run Tailwind</h4>
      <ShellCommand class="mb-2">npm run ui:dev</ShellCommand>

      <h4 class="py-6 text-center text-xl">Run .NET Project (New Terminal)</h4>
      <ShellCommand class="mb-2">dotnet watch</ShellCommand>

      <div class="mt-8 text-center">
        <div class="flex justify-center">
          <a class="bg-purple-500 text-purple-50 rounded px-2 py-0.5 mx-1" href="/posts/rider">rider</a>
          <a class="bg-purple-500 text-purple-50 rounded px-2 py-0.5 mx-1" href="/posts/vs">visualstudio</a>
        </div>
      </div>        
    </div>`,
    props: { template:String },
    setup(props) {
        const project = ref('ProjectName')
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
        return { project, uiPath, apiPath, validateSafeName }
    }
}