import { LightningElement, track } from 'lwc';

export default class ChildFormComponent extends LightningElement {
    @track name = '';
    @track email = '';

    handleInputChange(event) {
        const field = event.target.label.toLowerCase();
        this[field] = event.target.value;
    }

    handleSubmit() {
        const detail = {
            name: this.name,
            email: this.email
        };
        const submitEvent = new CustomEvent('formsubmit',  {detail} );
        this.dispatchEvent(submitEvent);
    }
}
