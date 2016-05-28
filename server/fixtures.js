if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    bu: 'APPBU/GP',
    ne: '20285',
    cpi: 'Pascal Rubino',
    mepp: '2016/05/25',
    mep: '2016/06/25',
    tn: 'U1'
  });

  Posts.insert({
    title: 'Meteor',
    bu: 'APPBU/GP',
    ne: '20285',
    cpi: 'Pascal Rubino',
    mepp: '2016/05/25',
    mep: '2016/06/25',
    tn: 'U2'
  });

  Posts.insert({
    title: 'The Meteor Book',
    bu: 'APPBU/GP',
    ne: '20285',
    cpi: 'Pascal Rubino',
    mepp: '2016/05/25',
    mep: '2016/06/25',
    tn: 'U3'
  });
  Posts.insert({
    title: 'The Meteor Book',
    bu: 'APPBU/GP',
    ne: '20285',
    cpi: 'Pascal Rubino',
    mepp: '2016/05/25',
    mep: '2016/06/25',
    tn: 'U4'
  });
}

if (Tasks.find().count() === 0) {
  Tasks.insert({
    lista: 'Introducing Telescope',
    name: 'task1',
    status: 'done',
    comment: '20285',
  });

  Tasks.insert({
    lista: 'Introducing Telescope',
    name: 'task2',
    status: 'done',
    comment: '20285',
  });

  Tasks.insert({
    lista: 'Introducing Telescope',
    name: 'task3',
    status: 'done',
    comment: '20285',
  });

}
