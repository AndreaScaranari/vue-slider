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
            return this.destinations.length - 1;
        },
        isFirstIndex(){
            return this.currentIndex === 0;
        },
        isLastIndex(){
            return this.currentIndex === this.lastElementIndex;
        }
    },
    methods: {
        setCurrentIndex(stringa){
            if (stringa === "prev") {
                if (this.isFirstIndex) this.currentIndex = this.lastElementIndex;
                else this.currentIndex--;
            } else if (stringa === "next") {
                if (this.isLastIndex) this.currentIndex = 0;
                else this.currentIndex++;
            } else {this.currentIndex = stringa;}
        }
    }
})

app.mount("#root");