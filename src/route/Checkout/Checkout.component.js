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
                        <div block="Checkout" elem="StepBarTotal" />
                        <div block="Checkout" elem="StepBarActive" mods={ { isSecond: title == "Billing step", isThird: title == 'Thank you for your purchase!'  } } />

                        <div block="Checkout" elem="StepsNum">
                            <div block="Checkout" elem="Num1" mods={ { isSecond: title == "Billing step", isThird: title == 'Thank you for your purchase!'  } }>1</div>
                            <div block="Checkout" elem="Num2" mods={ { isSecond: title == "Billing step", isThird: title == 'Thank you for your purchase!'  } }>2</div>
                        </div>
                    </div>
                    

                    <div block="Checkout" elem="StepsTitle">
                        <div block="Checkout" elem="Step">{ "Shipping" }</div>
                        <div block="Checkout" elem="Step">{ "Review & Payments" }</div>
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

// we now export the extended and modified version of the class
export default Checkout;