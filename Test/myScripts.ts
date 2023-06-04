interface BaseBlock{
    Header:string
    Content:string
    DataCreated: Date
    SetHeader():void
    SetContent():void
    SetData():void
    BuildBlock():void
}

class Blocks implements BaseBlock{
    Content: string;
    DataCreated: Date;
    Header: string;

    constructor() {
        this.SetHeader()
        this.SetContent()
        this.SetData()
        this.BuildBlock()
    }

    BuildBlock(): void {
        let mainPost = document.createElement('div')
        mainPost.className = 'card'

        let post = document.createElement('div')
        post.className = "card-body"



        let h1 = document.createElement("h1")
        h1.className = "card-title"
        h1.innerHTML = this.Header

        let p = document.createElement("p")
        p.className = "card-text"
        p.innerHTML = this.Content

        let data = document.createElement('p')
        data.className = 'data-time'
        data.innerHTML = String(this.DataCreated)

        post.append(h1)
        post.append(p)
        post.append(data)
        mainPost.append(post)
        let dataStore = document.querySelector('.col-8')
        dataStore.append(mainPost)
    }

    SetContent(): void {
        this.Content = prompt("Input the content post")
    }

    SetData(): void {
        this.DataCreated  = new Date();
    }

    SetHeader(): void {
        this.Header = prompt("Input the header post")
    }

}
addEventListener("DOMContentLoaded",
    () => {

       let button = document.querySelector('#create_post')
       button.addEventListener("click",()=>new Blocks())

    })



