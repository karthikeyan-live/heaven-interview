import React, { Component } from 'react';
import PropTypes from 'prop-types'; // to avoid the console warning
import styles from './FriendListPaginate.css';

class FriendListPaginate extends Component {
    render() {
        return (
            <div className={styles.pageButtonList}>
                <div>
                    <button className={`btn btn-default ${styles.btnAction}`}
                        disabled={this.props.activePage <= 1}
                        onClick={() => this.props.changeActivePage(1)}>
                        <i className="fa fa-fast-backward" />
                    </button>
                    <button className={`btn btn-default ${styles.btnAction}`}
                        disabled={this.props.activePage <= 1}
                        onClick={() => this.props.changeActivePage(this.props.activePage - 1)}>
                        <i className="fa fa-backward" />
                    </button>
                </div>
                <b>{this.totalPageCount() ? this.props.activePage : 0} of {this.totalPageCount()}</b>
                <div>
                    <button className={`btn btn-default ${styles.btnAction}`}
                        disabled={this.props.activePage >= this.totalPageCount()}
                        onClick={() => this.props.changeActivePage(this.props.activePage + 1)}>
                        <i className="fa fa-forward" />
                    </button>
                    <button className={`btn btn-default ${styles.btnAction}`}
                        disabled={this.props.activePage >= this.totalPageCount()}
                        onClick={() => { this.props.changeActivePage(this.totalPageCount()) }}>
                        <i className="fa fa-fast-forward" />
                    </button>
                </div>
            </div>
        );
    };

    componentDidUpdate(prevProps) {
        // if friend list have some item and no page is in view, then navigate to 1st page
        if (!this.props.activePage && this.totalPageCount()) {
            this.props.changeActivePage(1)
        }

        // if active page is greater than the total page count, navigate to the last page
        // helps when deleting items from the last page
        if (this.props.activePage > this.totalPageCount()) {
            this.props.changeActivePage(this.totalPageCount())
        }
    }

    totalPageCount = () => {
        return Math.ceil(this.props.totalItemsCount / this.props.itemsCountPerPage);
    }
}
FriendListPaginate.propTypes = {
    activePage: PropTypes.number.isRequired,
    itemsCountPerPage: PropTypes.number.isRequired,
    totalItemsCount: PropTypes.number.isRequired,
    changeActivePage: PropTypes.func.isRequired
};

export default FriendListPaginate;