import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    handleClick() {
        // Create and dispatch the custom event with a message
        const customEvent = new CustomEvent('messageevent', {
            detail: { 
                message: 'Hello from the Child Component!' 
            }
        });
        this.dispatchEvent(customEvent);
    }
}
