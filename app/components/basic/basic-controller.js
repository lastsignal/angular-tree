(function() {
	'use strict';

	angular.module('demoApp')
		.controller('BasicCtrl', [
			'$scope', function($scope) {
				$scope.remove = function(scope) {
					scope.remove();
				};

				$scope.toggle = function(scope) {
					scope.toggle();
				};

				$scope.newSubItem = function(scope) {
					var nodeData = scope.$modelValue;
					nodeData.nodes.push({
						id: nodeData.id * 10 + nodeData.nodes.length,
						title: nodeData.title + '.' + (nodeData.nodes.length + 1),
						nodes: []
					});
				};

				var getRootNodesScope = function () {
					return angular.element(document.getElementById("tree-root")).scope();
				};

				$scope.collapseAll = function () {
					var scope = getRootNodesScope();
					scope.collapseAll();
				};

				$scope.expandAll = function() {
					var scope = getRootNodesScope();
					scope.expandAll();
				};

				$scope.options = {
				};

				$scope.aggregate = {
					aggregateName: 'Aggregate 1',
					aggregateCode: 'AGG-001',
					fromDate: '2015-10-01',
					toDate: '2015-10-31',
					nodes: [
						{
							'id': 1,
							'title': 'node1',
							'collapsible': true,
							'nodes': [
								{
									'id': 11,
									'title': 'node1.1',
									'collapsible': true,
									'nodes': [
										{
											'id': 111,
											'title': 'node1.1.1',
										}
									]
								},
								{
									'id': 12,
									'title': 'node1.2',
								}
							]
						}, {
							'id': 2,
							'title': 'node2',
							'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
							'collapsible': true,
							'nodes': [
								{
									'id': 21,
									'title': 'node2.1',
								},
								{
									'id': 22,
									'title': 'node2.2',
								}
							]
						}, {
							'id': 3,
							'title': 'node3',
							'collapsible': true,
							'nodes': [
								{
									'id': 31,
									'title': 'node3.1',
								}
							]
						},
						{
							'id': 4,
							'title': 'node4',
							'collapsible': false,
						}
					]
				};

				$scope.markNoDrag = function (obj, level) {
					if (!obj)
						return;

					if (level > 0)
						obj.nodrag = true;

					if (!obj.nodes) return;

					for (var idx = 0; idx < obj.nodes.length; idx++) {
						$scope.markNoDrag(obj.nodes[idx], level + 1);
					}
				}

				//add deletablity to the root objects only
				for (var i = 0; i < $scope.aggregate.nodes.length; i++) {
					$scope.aggregate.nodes[i].deletable = true;

					$scope.markNoDrag($scope.aggregate.nodes[i], 0);
				}
			}
		]);

}());