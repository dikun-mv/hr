import React from 'react';
import {Admin, Resource} from 'admin-on-rest';
import restClient, {authClient} from 'aor-loopback';
import russian from 'aor-language-russian';

import {
  VacancyList,
  VacancyEdit,
  VacancyCreate,
  VacancyDelete
} from './containers/Vacancy';
import Dashboard from './containers/Dashboard';

const messages = {
  ru: russian
};

messages.ru.aor.navigation.no_results = 'Ничего не найдено';

const ControlPanel = props => (
  <Admin
    title="Панель управления"
    locale="ru"
    messages={messages}
    restClient={restClient('/api')}
    authClient={authClient('/api/users')}
    dashboard={Dashboard}
  >
    <Resource
      name="vacancies"
      options={{label: 'Вакансии'}}
      list={VacancyList}
      edit={VacancyEdit}
      create={VacancyCreate}
      remove={VacancyDelete}
    />
  </Admin>
);

export default ControlPanel;
