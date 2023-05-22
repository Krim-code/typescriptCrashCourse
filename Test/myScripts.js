var Blocks = /** @class */ (function () {
    function Blocks() {
        this.SetHeader();
        this.SetContent();
        this.SetData();
        this.BuildBlock();
    }
    Blocks.prototype.BuildBlock = function () {
        var mainPost = document.createElement('div');
        mainPost.className = 'card';
        var post = document.createElement('div');
        post.className = "card-body";
        var h1 = document.createElement("h1");
        h1.className = "card-title";
        h1.innerHTML = this.Header;
        var p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = this.Content;
        var data = document.createElement('p');
        data.className = 'data-time';
        data.innerHTML = String(this.DataCreated);
        post.append(h1);
        post.append(p);
        post.append(data);
        mainPost.append(post);
        document.body.append(mainPost);
    };
    Blocks.prototype.SetContent = function () {
        this.Content = prompt("Input the content post");
    };
    Blocks.prototype.SetData = function () {
        this.DataCreated = new Date();
    };
    Blocks.prototype.SetHeader = function () {
        this.Header = prompt("Input the header post");
    };
    return Blocks;
}());
addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector('#create_post');
    button.addEventListener("click", function () { return new Blocks(); });
});
