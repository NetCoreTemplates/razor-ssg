export default {
    props: {
        images: Object,
        gridClass: String,
    },
    template:`
        <div class="not-prose my-8">
            <!-- Gallery Grid -->
            <div :class="gridClass || 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'">
                <div v-for="(imageUrl, title) in images" :key="title"
                     @click="openLightbox(imageUrl, title)"
                     class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer bg-white dark:bg-gray-800">
                    
                    <!-- Image Container with aspect ratio for 2048x2158 -->
                    <div class="relative aspect-[2048/2158] overflow-hidden">
                        <!-- Gradient overlay on hover -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        
                        <!-- Image -->
                        <img :src="imageUrl" 
                             :alt="title"
                             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                             loading="lazy">
                        
                        <!-- Title overlay -->
                        <div class="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 class="text-white text-lg font-semibold capitalize">{{ title }}</h3>
                            <p class="text-gray-200 text-sm mt-1">Click to view full size</p>
                        </div>
                        
                        <!-- Zoom icon -->
                        <div class="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="bg-white/90 dark:bg-gray-900/90 rounded-full p-2 shadow-lg">
                                <svg class="w-5 h-5 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Lightbox Modal -->
            <div v-if="lightboxOpen" 
                 @click="closeLightbox"
                 class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
                
                <!-- Close button -->
                <button @click="closeLightbox"
                        class="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                
                <!-- Image title -->
                <div class="absolute top-4 left-4 z-50 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <h3 class="text-white text-xl font-semibold capitalize">{{ currentTitle }}</h3>
                </div>
                
                <!-- Image container -->
                <div @click.stop class="relative max-w-6xl max-h-[90vh] flex items-center justify-center">
                    <img :src="currentImage" 
                         :alt="currentTitle"
                         class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl">
                </div>
                
                <!-- Navigation arrows (if multiple images) -->
                <button v-if="imageKeys.length > 1"
                        @click.stop="previousImage"
                        class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-3 hover:bg-white/10 rounded-full">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                
                <button v-if="imageKeys.length > 1"
                        @click.stop="nextImage"
                        class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-3 hover:bg-white/10 rounded-full">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
                
                <!-- Image counter -->
                <div v-if="imageKeys.length > 1" 
                     class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <p class="text-white text-sm">{{ currentIndex + 1 }} / {{ imageKeys.length }}</p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            lightboxOpen: false,
            currentImage: '',
            currentTitle: '',
            currentIndex: 0
        }
    },
    computed: {
        imageKeys() {
            return Object.keys(this.images)
        }
    },
    methods: {
        openLightbox(imageUrl, title) {
            this.currentImage = imageUrl
            this.currentTitle = title
            this.currentIndex = this.imageKeys.indexOf(title)
            this.lightboxOpen = true
            document.body.style.overflow = 'hidden'
            document.addEventListener('keydown', this.handleKeydown)
        },
        closeLightbox() {
            this.lightboxOpen = false
            document.body.style.overflow = ''
            document.removeEventListener('keydown', this.handleKeydown)
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.imageKeys.length
            const key = this.imageKeys[this.currentIndex]
            this.currentImage = this.images[key]
            this.currentTitle = key
        },
        previousImage() {
            this.currentIndex = (this.currentIndex - 1 + this.imageKeys.length) % this.imageKeys.length
            const key = this.imageKeys[this.currentIndex]
            this.currentImage = this.images[key]
            this.currentTitle = key
        },
        handleKeydown(e) {
            if (!this.lightboxOpen) return

            switch(e.key) {
                case 'Escape':
                    this.closeLightbox()
                    break
                case 'ArrowRight':
                    if (this.imageKeys.length > 1) {
                        this.nextImage()
                    }
                    break
                case 'ArrowLeft':
                    if (this.imageKeys.length > 1) {
                        this.previousImage()
                    }
                    break
            }
        }
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this.handleKeydown)
    }
}
