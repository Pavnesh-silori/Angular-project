# alias ngbl_tsca='./library-build.sh'

echo "Library build started"

ng b @library/storage-service
ng b @library/toastr-service
ng b @library/authentication-service
ng b @library/application-service
ng b @library/rbac-service
ng b @library/feature-service
ng b @library/user-service
ng b @library/facility-service
ng b @library/organization-service
ng b @library/layout-service
ng b @library/tsc-common
ng b @library/echart
ng b @library/subscription-service
ng b @library/generate-otp
ng b @library/unit-service
ng b @library/date
ng b @library/authorization
ng b @library/netzero
ng b @library/tsc-lite
ng b @library/alerts
ng b @library/chart

echo "Library build completed"
