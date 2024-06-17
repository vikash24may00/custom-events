import { LightningElement } from 'lwc';

export default class childComponentWithData extends LightningElement {
    handleClick() {
        // Create a custom event
        const myCustomEvent = new CustomEvent('mycustomevent', {
            detail: { 
                // Data to pass with the event
                message: 'Hello from child component!',
                timestamp: new Date().toLocaleTimeString()
            }
        });
        // Dispatch the custom event
        this.dispatchEvent(myCustomEvent);
    }
}
