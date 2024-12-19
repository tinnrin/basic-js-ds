const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.binaryTree = null;
  }

  root() {
    return this.binaryTree;
  }

  add(data) {
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }

    this.binaryTree = addNode(this.binaryTree, data);
  }

  has(data) {
    return Boolean(this.find(data));
  }

  find(data) {
    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node = findNode(node.left, data);
      } else if (node.data < data) {
        node = findNode(node.right, data);
      } else {
        return node;
      }
      return node;
    }

    return findNode(this.binaryTree, data);
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data < data) {
        node.right = removeNode(node.right, data);
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
        } else if (!node.right) {
          node = node.left;
        } else {
          let rightNode = node.right;
          while (rightNode.left) {
            rightNode = rightNode.left;
          }
          node.data = rightNode.data;
          node.right = removeNode(node.right, rightNode.data);
        }
      }
      return node;
    }

    this.binaryTree = removeNode(this.binaryTree, data);
  }

  min() {
    if (!this.binaryTree) {
      return null;
    }

    let node = this.binaryTree;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.binaryTree) {
      return null;
    }

    let node = this.binaryTree;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
