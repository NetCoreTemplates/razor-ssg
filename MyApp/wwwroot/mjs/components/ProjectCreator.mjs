import { ref } from "vue"

const ProjectCreator = {
    template:`
    <section class="w-full flex flex-col justify-center text-center not-prose">
        <div class="mb-2">
            <div class="flex justify-center">
                <div class="w-70">
                    <input v-model="name" type="text" placeholder="Project Name" autocorrect="off" spellcheck="false" v-on:keypress="isAlphaNumeric"
                           class="mt-1 text-lg block w-full px-3 py-2 bg-white dark:bg-black border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
                </div>
            </div>
        </div>
        <div class="mb-2">
            <div class="flex flex-wrap justify-center gap-x-4">
                <slot :text="name"></slot>
            </div>
        </div>
    </section>`,
    setup(props) {
        const name = ref('MyApp')

        const isAlphaNumeric = (e) => {
            const c = e.charCode;
            if (c >= 65 && c <= 90 || c >= 97 && c <= 122 || c >= 48 && c <= 57 || c === 95) //A-Za-z0-9_
                return;
            e.preventDefault()
        }
        return { name, isAlphaNumeric }
    }
}
export default ProjectCreator
