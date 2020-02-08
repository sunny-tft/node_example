pipeline {
  agent any
  stages {
    stage('build') {
      environment {
        PORT=12345
      }
      steps {
        sh "npm install"
        sh "npm run save"
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh "npm run stop"
        }
        sh "npm run start"
      }
    }
  }
}

