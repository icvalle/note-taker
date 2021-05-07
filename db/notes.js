class Notes {
    constructor(title, text, id){
        this.title = title;
        this.text = text;
        this.id = id;
    }
    
    getTitle() {
        return this.title
    }

    getText() {
        return this.text
    }
}

module.exports = Notes;