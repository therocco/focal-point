/**
 * <focal-point>
 * @file Custom Elements v1 to mimick highlighter text 
 * @author: Rocco Augusto <rocco@nerdofsteel.com>
**/

class FocalPoint extends HTMLElement {
    /**
     * Create <focal-point>.
     * @property {string} color - Valid CSS color code/hex/rgb/rgba/hsl/hsla value. Predefined values to mimick generic highlighters are `yellow`, `green`, `blue`, `orange`, `pink`, and `purple`.
    */
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

    /**
     * Observe attributes
    */
    static get observedAttributes() {
        return ['color'];
    }
    
    /**
     * Get the color value.
    */
    get color() {
        return this._color;
    }

    /**
     * Set the color value.
     * @return {string} color value.
    */
    set color(color) {
        this.setAttrbute('color', color);
    }
    
    /**
     * Event that fires when attributes change
    */
    attributeChangedCallback(name, oldValue, newValue) {
        if(!newValue) newValue = 'yellow';
        if(oldValue !== newValue) {
            this._color = newValue;
            this.applyFocalPoint();
        }
    }

    /**
     * Custom element loaded
    */
    connectedCallback() {
        this.applyFocalPoint();
    }

    /**
     * Render custom element
    **/
    applyFocalPoint() {
        this.style.display = 'inline-block';
        this.style.backgroundColor = this._palette.hasOwnProperty(this._color) ? 
            this._palette[this._color] :
            this._color;
    }

}

customElements.define('focal-point', FocalPoint);
