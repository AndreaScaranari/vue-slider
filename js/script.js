// check di prova
console.log("Hey Vue!", Vue);

const { createApp } = Vue;

const app = createApp ({
    data: () => ({
        destinations,
        currentIndex: 0
    })
})

app.mount("#root");