import { ref, onMounted } from "vue"
import { addScript } from "@servicestack/client"

const loadJs = addScript('https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js')

export default {
    template:`<div><canvas ref="chart"></canvas></div>`,
    props:['type','data','options'],
    setup(props) {
        const chart = ref()
        onMounted(async () => {
            await loadJs

            const options = props.options || {
                responsive: true,
                legend: {
                    position: "top"
                }
            }
            new Chart(chart.value, {
                type: props.type || "bar",
                data: props.data,
                options,
            })

        })
        return { chart }
    }
}
