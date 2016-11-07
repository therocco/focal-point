/**
 * <marked>
 * @author: Rocco Augusto
**/
class FocalPoint extends HTMLElement {
    constructor() {
        super();
        this._color = 'yellow';
        this._palette = {
            yellow: '#f3f315',
            green: '#00ff66',
            blue: '#67c8ff',
            pink: '#ff6ec7',
            orange: '#ff9933',
            purple: '#9370db'
        };
    }

    static get observedAttributes() {
        return ['color'];
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this.setAttrbute('color', color);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(!newValue) newValue = 'yellow';
        if(oldValue !== newValue) {
            this._color = newValue;
            this.applyFocalPoint();
        }
    }

    connectedCallback() {
        this.applyFocalPoint();
    }

     applyFocalPoint() {
        this.style.display = 'inline-block';
        this.style.backgroundColor = this._palette.hasOwnProperty(this._color) ? 
            this._palette[this._color] :
            this._color;
    }

}

customElements.define('focal-point', FocalPoint);
