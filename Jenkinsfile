pipeline {
  agent any
  stages {
    stage('build') {
      environment {
        PORT=12345
        GIT_COMMIT = sh (script: "git log -1 --format=%h", returnStdout: true)
      }
      steps {
        sh "npm install"
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh "npm run stop"
        }
        sh 'sleep 5'
        sh "npm run start"
      }
    }
  }
}

