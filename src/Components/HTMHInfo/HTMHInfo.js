import React, {Component} from 'react';
import {Modal, Button, Form, Label, Icon, Grid, Popup} from 'semantic-ui-react';
import SubscribersList from "../SubscribersList/SubscribersList";


export default class HTMHInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            htmhShowSecret: false,
        }
    }

    render() {
        return (
            <Grid columns={3} divided textAlign={'left'}>
                <Grid.Row>
                    <Grid.Column>
                        <Label size={'large'}>
                            <Icon name={'key'}/>
                            Service Token:
                            <Label.Detail>
                                {this.props.htmhInfo.serviceToken}
                            </Label.Detail>
                        </Label>
                        <Popup
                            content='Copied!'
                            inverted
                            on={'click'}
                            trigger={
                                <Button
                                    basic
                                    icon={'copy outline'}
                                    size={'mini'}
                                    onClick={() => {navigator.clipboard.writeText(this.props.htmhInfo.serviceToken)}}
                                />
                            }
                        />
                    </Grid.Column>
                    <Grid.Column>
                      <Label size={'large'}>
                          <Icon name={'calendar alternate'}/>
                          Starts:
                          <Label.Detail>
                              {this.props.htmhInfo.startDatetime}
                          </Label.Detail>
                      </Label>
                    </Grid.Column>
                    <Grid.Column>
                      <Label size={'large'}>
                          <Icon name={'calendar alternate'}/>
                          Ends:
                          <Label.Detail>
                              {this.props.htmhInfo.endDatetime}
                          </Label.Detail>
                      </Label>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Label size={'large'}>
                            <Icon name={'check circle'}/>
                            Active:
                            <Label.Detail>
                                {this.props.htmhInfo.active}
                            </Label.Detail>
                        </Label>
                    </Grid.Column>
                    <Grid.Column>
                        <SubscribersList
                            subscribersList={this.props.htmhInfo.subscribersList}
                            subsNum={this.props.htmhInfo.subsNum}/>
                    </Grid.Column>
                    { this.props.htmhInfo.isOwner && <Grid.Column>
                        <Label size={'large'}>
                            <Icon name={'lock'}/>
                            Secret:
                            <Label.Detail>
                                {this.state.htmhShowSecret ? this.props.htmhInfo.secretKey : '*******'}
                            </Label.Detail>
                        </Label>
                        <Button
                            basic
                            icon={'eye'}
                            size={'mini'}
                            onClick={()=>this.setState(prevState=> ({htmhShowSecret: !prevState.htmhShowSecret}))}
                        />
                    </Grid.Column>}
                </Grid.Row>

            </Grid>
        )
    }
}
