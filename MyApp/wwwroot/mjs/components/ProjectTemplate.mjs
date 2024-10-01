import { computed } from "vue"

const ProjectTemplate = {
    template:`
    <a class="archive-url hover:no-underline" :href="zipUrl">
        <div class="bg-white dark:bg-gray-800 px-4 py-4 mr-4 mb-4 rounded-lg shadow-lg text-center items-center justify-center hover:shadow-2xl dark:border-2 dark:border-pink-600 dark:hover:border-blue-600 dark:border-2 dark:border-pink-600 dark:hover:border-blue-600" style="min-width:150px">
           <div class="text-center font-extrabold flex items-center justify-center mb-2">
              <div class="text-4xl text-blue-400 my-3">
                <slot name="icon"></slot>
              </div>
           </div>
           <slot></slot>
           <div class="flex justify-center h-8">
            <div v-for="tag in tags" class="mr-1"><span class="px-2 h-8 rounded-lg bg-blue-50 dark:bg-blue-900 text-blue-500 dark:text-blue-400 text-sm">{{ tag }}</span></div>
           </div>
           <div class="archive-name px-4 pb-2 text-blue-600 dark:text-indigo-400">{{ projectZip }}</div>
           <div v-if="count >= 60" class="count mt-1 text-gray-400 text-sm">{{count}} installs</div>
           <div v-else-if="count > 0" class="inline-flex items-center rounded-full bg-pink-100 px-1.5 py-0.5 text-xs font-medium text-pink-700">new</div>
        </div>
     </a>
    `,
    props: { 
        repo:String, 
        name:String,
        mix:{ type:Object, default(rowProps) { return [] } },
        tags:{ type:Object, default(rowProps) { return [] } },
        count:Number
    },
    setup(props) {
        const projectZip = computed(() => (props.name || 'MyApp') + '.zip')
        const zipUrl = computed(() => {
            let ret = `https://account.servicestack.net/archive/${props.repo}?Name=${props.name || 'MyApp'}`
            if (props.mix?.length > 0) {
                ret += '&Mix=' + props.mix.join(',')
            }
            return ret
        })
        
        return { projectZip, zipUrl }
    }
}
export default ProjectTemplate
