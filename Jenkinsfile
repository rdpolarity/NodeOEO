pipeline {
  agent any
  stages {
    stage('NodeCG Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Bundle Dependencies') {
      steps {
        sh 'npm install --prefix bundles/oeo-assets'
      }
    }
    stage('Start NodeCG') {
      steps {
        sh 'node index.js'
      }
    }
  }
}