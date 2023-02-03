import { HeaderController } from '../../controller/HeaderController';
import { BaseComponent } from '../BaseComponent';
import './header.css';

interface HeaderComponentProps {
    controller: HeaderController;
}

export class HeaderComponent extends BaseComponent<HeaderComponentProps> {
    private headerNav!: HTMLUListElement;

    constructor(controller: HeaderController) {
        super('header', { controller }, 'header');
    }

    protected render() {
        this.headerNav = document.createElement('ul');
        this.headerNav.className = 'header-nav';
    }
}
