import React from 'react';
import { Phone } from './phone';
import './style.scss';

class Phones extends React.PureComponent {
    state = {
        intervalId: 0
    };

    scrollToTop = () => {
        const intervalId = setInterval(this.scrollStep, '16.66');
        this.setState({ intervalId });
    }


    scrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - '50');
    }


    render() {
        return (
            <section className="phones">
                <div className="page-header">
                    <h1 className="page-title">Смартфоны</h1>
                </div>
                <div className="phones__list">
                    {this.props.data.map(phone => {
                        return (
                            <Phone
                                key={phone.id}
                                deleteCompare={this.props.deleteCompare}
                                addCompare={this.props.addCompare}
                                phone={phone}
                                scrollToTop={this.scrollToTop}
                            />
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default Phones;
