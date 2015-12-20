import React from 'react';
import classNames from 'classnames';

export default class extends React.Component {
    render() {
        const list = this.props.list;
        const actions = this.props.actions;
        return (
            <ul id="menu" className="menu">
                <li className="button button-circle create">
                    <i className={classNames('fa', {['fa-'+(list.get('show')?'plus':'inbox')]: true})}></i>
                </li>
                <li className="button button-circle setting"><i className="fa fa-wrench"></i></li>
                <li className="button button-circle"><i className="fa fa-hashtag"></i></li>
                <li><i id="loading" className={classNames('fa fa-cog fa-spin', {hide: !list.get('loading')})}></i></li>
            </ul>
        );
    }
}
