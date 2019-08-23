pipeline {
  agent any
  stages {
    stage('Clone NodeCG') {
      steps {
        sh 'git clone https://github.com/nodecg/nodecg.git'
      }
    }
    stage('Build NodeCG') {
      steps {
        sh 'npm install'
      }
    }
    stage('Clone Asset') {
      steps {
        sh '''cd bundles
git clone https://github.com/rdpolarity/oeo-assets'''
      }
    }
    stage('Build Assets') {
      steps {
        sh '''cd bundles
npm install'''
      }
    }
  }
}