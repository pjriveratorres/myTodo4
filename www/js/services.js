angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */

    .factory('Friends', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var friends = [
            { id: 0, name: 'Pedro Rivera', type: 'Papi'  },
            { id: 1, name: 'Gabriela Rivera', type: 'Hija'  },
            { id: 2, name: 'Esteban Rivera', type: 'Hijo'  },
            { id: 3, name: 'Paola Rivera', type: 'Hija' },
            { id: 4, name: 'Mary Ramirez', type: 'Novia'}

        ];

        return {
            all: function () {
                return friends;
            },
            get: function (friendId) {
                // Simple index lookup
                return friends[friendId];
            }
        };
    })

    .factory('Tasks', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var tasks = [
            { description: 'Buscar a Gaby', status: false },
            { description: 'Llevar a Esteban', status: false },
            { description: 'Llenar Replicon', status: false },
            { description: 'Ir al banco', status: false }
        ];

        return {
            all: function () {
                return tasks;
            }
        };
    })


    .factory('Components', function() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var components = [
            { ItemNum: '01234566', description: 'Window/Door Sensor', quantity: 1, perUnit: 12.00, location: 'Kitchen' },
            { ItemNum: '21234566', description: 'Wireless Window/Door Sensor (3 Pack)', quantity: 1, perUnit: 10.00, location: 'Room 1' },
            { ItemNum: '31234566', description: 'Indoor Motion Sensor', quantity: 0, perUnit: 99.00, location: 'Room 1' },
            { ItemNum: '41234566', description: 'Motion  Curtain Sensor', quantity: 0, perUnit: 19.00, location: 'Hallway' },
            { ItemNum: '51234566', description: 'Glass Break Sensor', quantity: 0, perUnit: 9.00, location: 'Room 1' },
            { ItemNum: '61234566', description: 'Wireless Aux Sensor', quantity: 0, perUnit: 2.00, location: 'Room 1' },
            { ItemNum: '71234566', description: 'Extended-Range Key Fob', quantity: 0, perUnit: 5.00, location: 'Kitchen' },
            { ItemNum: '81234566', description: 'Wireless Keypad', quantity: 0, perUnit: 7.00, location: 'Kitchen' },
            { ItemNum: '91234566', description: 'Siren Repeater', quantity: 0, perUnit: 8.00, location: 'Room 1' },
            { ItemNum: '11234566', description: 'Heat/Smoke Sensor', quantity: 0, perUnit: 1.00, location: 'Living-room' },
            { ItemNum: '91234566', description: 'Carbon Monoxide Sensor', quantity: 2, perUnit: 2.00, location: 'Room 1' },
            { ItemNum: '12345660', description: 'Water Sensor', quantity: 5, perUnit: 6.00, location: 'Kitchen' },
            { ItemNum: '12345661', description: 'Outdoor Camera', quantity: 2, perUnit: 78.00, location: 'Kitchen' },
            { ItemNum: '12345662', description: 'Indoor Automation Module', quantity: 0, perUnit: 22.00, Location: 'Room 3' },
            { ItemNum: '12345663', description: 'Indoor Camera', quantity: 0, perUnit: 9.00, Location: 'Room 1' },
            { ItemNum: '12345664', description: 'Lighting Automation Module', quantity: 0, perUnit: 98.00, location: 'Room 1' },
            { ItemNum: '12345665', description: 'Appliance Automation Module', quantity: 0, perUnit: 11.00, location: 'Kitchen' },
            { ItemNum: '12345666', description: 'Wireless Thermostat', quantity: 0, perUnit: 19.00, location: 'Room 2' }
]       ;

        return {
            all: function () {
                return components;
            }
        };
    });





