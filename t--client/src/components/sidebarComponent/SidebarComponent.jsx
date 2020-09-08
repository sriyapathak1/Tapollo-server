import React, { Component } from 'react';
import { Box, AdvanceTable, Button, Icon } from '@stack-ui/components';

class SidebarComponent extends Component {
    render() {
const columns = [
    {
        cell: row => <Icon size={16} icon="endorsed" />,
        allowOverflow: true,
        button: true,
        width: '56px', // custom width for icon button
      },
      {
        name: 'Name',
        selector: 'name',
        sortable: true,
        grow: 2,
      },
      {
        name: 'Type',
        selector: 'type',
        sortable: true,
      },
      {
        name: 'Calories (g)',
        selector: 'calories',
        sortable: true,
        right: true,
      },
      {
        name: 'Fat (g)',
        selector: 'fat',
        sortable: true,
        right: true,
      },
      {
        name: 'Carbs (g)',
        selector: 'carbs',
        sortable: true,
        right: true,
      },
      {
        name: 'Protein (g)',
        selector: 'protein',
        sortable: true,
        right: true,
      },
      {
        name: 'Sodium (mg)',
        selector: 'sodium',
        sortable: true,
        right: true,
      },
      {
        name: 'Calcium (%)',
        selector: 'calcium',
        sortable: true,
        right: true,
      },
      {
        name: 'Iron (%)',
        selector: 'iron',
        sortable: true,
        right: true,
      },
      {
          cell: () => <Button btnType="primary" btnVariant="contained" icon="add"> </Button>,
          button: true,
      },
];
const data = [
    {
        id: 1,
        name: 'Frozen yogurt',
        type: 'Ice cream',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: 14,
        iron: 1,
      }, {
        id: 2,
        name: 'Ice cream sandwhich',
        type: 'Ice cream',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: 8,
        iron: 1,
      },
]

        return (
            <div>
                <Box border="1px solid green">
                <AdvanceTable title="Nutritions" columns={columns} data={data} selectableRows pagination />
                </Box>
            </div>
        );
    }
}

export default SidebarComponent;