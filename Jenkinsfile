pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install npm-install-missing'
        sh 'npm-install-missing'
      }
    }
    stage('Build Bundle') {
      steps {
        sh 'npm install --prefix bundles/oeo-assets'
      }
    }
    stage('Deliver') {
      steps {
        sh 'node index.js'
      }
    }
  }
}