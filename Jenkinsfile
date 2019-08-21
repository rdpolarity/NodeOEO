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
        input 'Start NodeCG server?'
        sh 'node index.js'
      }
    }
  }
}