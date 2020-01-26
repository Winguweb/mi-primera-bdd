/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { get, upperFirst } from 'lodash';
import { auth } from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';

import useFetch from './hooks';
import {
  ALink,
  Block,
  Container,
  LinkWrapper,
  P,
  Wave,
  Separator,
} from './components';
import Accounts from './charts/Accounts'
import AccountsWithOpportunities from './charts/AccountsWithOpportunities'
import Contacts from './charts/Contacts'
import Opportunities from './charts/Opportunities'

const FIRST_BLOCK_LINKS = [
  {
    link:
      'https://strapi.io/documentation/3.0.0-beta.x/getting-started/quick-start.html#_4-create-a-new-content-type',
    contentId: 'app.components.BlockLink.documentation.content',
    titleId: 'app.components.BlockLink.documentation',
  },
  {
    link: 'https://github.com/strapi/foodadvisor',
    contentId: 'app.components.BlockLink.code.content',
    titleId: 'app.components.BlockLink.code',
  },
];

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    link: 'https://github.com/strapi/strapi/',
  },
  {
    name: 'Slack',
    link: 'https://slack.strapi.io/',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@strapi',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/strapijs',
  },
  {
    name: 'Reddit',
    link: 'https://www.reddit.com/r/Strapi/',
  },
  {
    name: 'Stack Overflow',
    link: 'https://stackoverflow.com/questions/tagged/strapi',
  },
];

const HomePage = ({ global: { plugins }, history: { push } }) => {
  const { error, isLoading, posts } = useFetch();
  const handleClick = e => {
    e.preventDefault();

    push(
      '/plugins/content-type-builder/models/user&source=users-permissions?modalType=model&settingType=base&actionType=create'
    );
  };
  const hasAlreadyCreatedContentTypes =
    get(
      plugins,
      ['content-manager', 'leftMenuSections', '0', 'links'],
      []
    ).filter(contentType => contentType.isDisplayed === true).length > 1;

  const headerId = hasAlreadyCreatedContentTypes
    ? 'HomePage.greetings'
    : 'app.components.HomePage.welcome';
  const username = get(auth.getUserInfo(), 'username', '');
  const linkProps = hasAlreadyCreatedContentTypes
    ? {
        id: 'app.components.HomePage.button.blog',
        href: 'https://blog.strapi.io/',
        onClick: () => {},
        type: 'blog',
        target: '_blank',
      }
    : {
        id: 'app.components.HomePage.create',
        href: '',
        onClick: handleClick,
        type: 'documentation',
      };

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Block>
              
              <FormattedMessage
                id={headerId}
                values={{
                  name: upperFirst(username),
                }}
              >
                {msg => <h2 id="mainHeader" style={{ position: 'relative' }}>
                  {msg}
                  <Wave />
                </h2>}
              </FormattedMessage>
              
              <Separator style={{ marginTop: 37, marginBottom: 36 }} />
              
              <div className="row">
                <div className="col-md-6">
                  <Opportunities />
                </div>
                <div className="col-md-6">
                <Contacts />
                </div>
              </div>

              <Separator style={{ marginTop: 37, marginBottom: 36 }} />

              <div className="row">
                <div className="col-md-6">
                  <Accounts />
                </div>
                <div className="col-md-6">
                  <AccountsWithOpportunities />
                </div>
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
