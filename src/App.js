import React, { Component, Fragment } from 'react'
import {Button} from 'antd'
import './App.css'
export default class App extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Button type="primary">添加</Button>
                </div>
            </Fragment>
        )
    }
}