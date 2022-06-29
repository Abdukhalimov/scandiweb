import ContentWrapper from 'Component/ContentWrapper';
import { Checkout as SourceCheckout } from 'SourceRoute/Checkout/Checkout.component';
import './Checkout.override.style.scss';


export class Checkout extends SourceCheckout { 
  

    renderTitle() {
        const { checkoutStep } = this.props;
        const { title = '' } = this.stepMap[checkoutStep];

        return (
            <div block="ProgressBar">
                <div block="Checkout" elem="ProgressSection">
                    <div block="Checkout" elem="Overlap" >
                        <div block="Checkout" elem="StepBarTotal" >
                            <span block="Checkout" elem="Step1">1</span>
                            <span 
                                block="Checkout" 
                                elem="Step2"
                                mods={ { isSecond: title == "Billing step"}} 
                                >2
                            </span>
                        </div>
                        <div block="Checkout" 
                             elem="StepBarActive" 
                             mods={ { isSecond: title == "Billing step", isThird: title == 'Thank you for your purchase!'}} 
                        />
                           
                        <div block="Checkout" elem="StepLabes">
                            <div block="Checkout" elem="Lable">{ "Shipping" }</div>
                            <div block="Checkout" elem="Lable">{ "Review & Payments" }</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <main block="Checkout" elem="main">
                 { this.renderTitle() }
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;