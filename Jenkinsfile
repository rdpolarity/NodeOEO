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
    stage('Deliver NodeCG') {
      steps {
        input 'Start NodeCG server?'
        sh 'pm2 start index.js'
      }
    }
  }
}