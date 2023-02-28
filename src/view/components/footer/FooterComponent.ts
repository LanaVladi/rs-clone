import { FooterController } from '../../../controller/FooterController';
import { BaseComponent } from '../../BaseComponent';
import './footer.css';

interface FooterComponentProps {
    controller: FooterController;
}

export class FooterComponent extends BaseComponent<FooterComponentProps> {
    private footerContainer!: HTMLDivElement;

    constructor(controller: FooterController) {
        super('footer', { controller }, 'footer');
    }

    protected render(): void {
        this.footerContainer = document.createElement('div');
        this.footerContainer.classList.add('footer-container');

        this.footerContainer.insertAdjacentHTML(
            'beforeend',
            `
    <div class="footer__developers-gitHub">
    <a class="footer__developers-gitHub-link" href="https://github.com/LanaVladi">LanaVladi</a>
      <a class="footer__developers-gitHub-link" href="https://github.com/ilyahancharuk">IlyaHancharuk</a>
      <a class="footer__developers-gitHub-link" href="https://github.com/alex962012">AlexVoytenko</a>

    </div>
    <p class="footer__year">2023</p>
    <div class="footer__RSS-logo">
      <a class="footer__RSS-logo-link" href="https://rs.school/js/"><div class='footer-logo-icon'></div></a>
    </div>
    `
        );

        this.element.append(this.footerContainer);
    }
}
