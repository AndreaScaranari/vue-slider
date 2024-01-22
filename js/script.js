// check di prova
console.log("Hey Vue!", Vue);

const { createApp } = Vue;

const app = createApp ({
    data: () => ({
        destinations,
        currentIndex: 0
    }),
    computed: {
        lastElementIndex(){
            return this.destinations.length - 1
        },
        isFirstIndex(){
            return this.currentIndex === 0
        },
        isLastIndex(){
            return this.currentIndex === this.lastElementIndex
        }
    },
    // methods: {

    // }
})

app.mount("#root");