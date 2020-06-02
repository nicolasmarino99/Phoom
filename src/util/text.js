class Text {
    constructor(context,x,y,string,style,origin) {
        this.context = context
        this.x = x
        this.y = y
        this.text = string        
        this.style = this.initStyle(style)
        this.origin = this.initOrigin(origin)
        this.obj = this.createText()
    }

    initStyle(key) {

        let style = {
            fontFamily : 'Alagard',
            fontSize : 16,
            color : '0xFFFFFF',
            align : 'center'

        }

        switch (key.toLowerCase()) {
            case 'title':
                style.fontSize = 32
                break;
    
            case 'preload':
                style.fontSize = 24
                break;
        }
        return style
    }

    initOrigin(origin) {
        if (typeof origin === 'number') {
            return {
                x: origin,
                y: origin
            }
        } else if (typeof origin === 'object') {
            return origin
        } else {
            return {
                x: 0.5,
                y: 0.5
            } 
        }

           
    }

    createText() {
        let obj = this.context.add.bitmapText(
            this.x,
            this.y,
            this.text,       
            this.style.fontFamily,
            this.style.align,
        );

        obj.setOrigin(this.origin.x, this.origin.y)

        return obj
    }

    destroy() {
        this.obj.destroy()

        this.obj = false
    }

    //Setters
        setText(string) {
            this.text = string
            this.obj.setText(string)
        }

        setX(x) {
            this.x = x
            this.obj.setX
        }
    //Getters
}