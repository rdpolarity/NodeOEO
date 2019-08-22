pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm-install-missing'
      }
    }
    stage('Build Bundle') {
      steps {
        sh 'npm install --prefix bundles/oeo-assets'
      }
    }
    stage('Deliver NodeCG') {
      steps {
        sh '''node index.js
'''
      }
    }
  }
}