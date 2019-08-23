pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
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