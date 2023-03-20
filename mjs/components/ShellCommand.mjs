import { ref } from "vue"
import { map } from "@servicestack/client"

export default {
    template:`<div class="lang relative bg-gray-700 text-gray-300 pl-5 py-3 sm:rounded flex">
    <div class="flex ml-2 w-full justify-between cursor-pointer" @click="copy">
      <label class="">
        <slot></slot>
      </label>
      <small class="text-xs text-gray-400 px-3 -mt-1">sh</small>
    </div>
    <div v-if="successText" class="-mr-24 right-0 absolute text-md text-gray-200 bg-green-700 px-1 rounded">
      <div class="flex pr-1">
        <svg class="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z"/></svg>
        {{ successText }}
      </div>
    </div>
  </div>`,
    setup(props) {
        let successText = ref('')
        /** @param {MouseEvent} e */
        function copy(e) {
            let $el = document.createElement("input")
            let $lbl = e.target.parentElement.querySelector('label')
                $el.setAttribute("value", $lbl.innerText)
            document.body.appendChild($el)
            $el.select()
            document.execCommand("copy")
            document.body.removeChild($el)
            if (typeof window.getSelection == "function") {
                const range = document.createRange()
                range.selectNodeContents($lbl)
                map(window.getSelection(), sel => {
                    sel.removeAllRanges()
                    sel.addRange(range)
                })
            }
            successText.value = 'copied'
            setTimeout(() => successText.value = '', 3000)
        }
        return { successText, copy }
    }
}
