import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  FunctionField,
  Edit,
  SimpleForm,
  LongTextInput,
  TextInput,
  DateInput,
  Create,
  EditButton,
  DeleteButton,
  Delete,
  Filter
} from 'admin-on-rest';
import RichTextInput from 'aor-rich-text-input';
import {Chip} from 'material-ui';

import ChipInput from '../components/ChipInput';

const VacancyFilter = props => (
  <Filter {...props}>
    <TextInput
      source="title"
      label="по названию"
      parse={v => ({like: v})}
      format={v => v ? v.like : ''}
    />
    <ChipInput
      source="skills"
      label="по навыкам"
      parse={v => ({inq: v})}
      format={v => v ? v.inq : []}
    />
  </Filter>
);

const VacancyList = props => (
  <List title="Вакансии" filters={<VacancyFilter/>} {...props}>
    <Datagrid>
      <TextField source="title" label="название"/>
      <FunctionField
        elStyle={{
          display: 'flex',
          flexFlow: 'row wrap'
        }}
        source="skills"
        label="навыки"
        render={record => record.skills.map((skill, key) => (
          <Chip style={{margin: 5}} key={key}>{skill}</Chip>
        ))}
      />
      <DateField source="opened" label="дата открытия" locales="ru-RU"/>
      <DateField source="closed" label="дата закрытия" locales="ru-RU"/>
      <EditButton label=""/>
      <DeleteButton label=""/>
    </Datagrid>
  </List>
);

const VacancyEdit = props => (
  <Edit title="Изменение вакансии" {...props}>
    <SimpleForm>
      <LongTextInput source="title" label="название"/>
      <RichTextInput source="description" label="описание"/>
      <ChipInput source="skills" label="навыки"/>
      <DateInput
        source="opened"
        label="дата открытия"
        options={{
          locale: 'ru',
          cancelLabel: 'отмена'
        }}
      />
      <DateInput
        source="closed"
        label="дата закрытия"
        options={{
          locale: 'ru',
          cancelLabel: 'отмена'
        }}
      />
    </SimpleForm>
  </Edit>
);

const VacancyCreate = props => (
  <Create title="Добавление вакансии" {...props}>
    <SimpleForm>
      <LongTextInput source="title" label="название"/>
      <RichTextInput source="description" label="описание"/>
      <ChipInput source="skills" label="навыки"/>
    </SimpleForm>
  </Create>
);

const VacancyDelete = props => <Delete title="Удаление вакансии" {...props}/>;

export {
  VacancyList,
  VacancyEdit,
  VacancyCreate,
  VacancyDelete
};
