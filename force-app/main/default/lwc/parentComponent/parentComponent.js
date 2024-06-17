import { LightningElement, track } from 'lwc';

export default class ParentComponent extends LightningElement {
    @track childMessage = ''; // Track the message from the child component

    handleMessageEvent(event) {
        // Update the tracked property with the message from the event detail
        this.childMessage = event.detail.message;
    }
}
