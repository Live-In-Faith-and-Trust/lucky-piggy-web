# `.well-known/assetlinks.json` — Android App Links 검증

`https://withly.co.kr/invite/{code}` 링크를 클릭했을 때 Android가 **lucky-pocket-app**을 직접 실행하도록 허용하는 검증 파일.

## SHA-256 fingerprint 추출 방법

각 keystore에서 추출한 값을 `assetlinks.json`의 `sha256_cert_fingerprints` 배열에 채워 넣는다. 형식: `AA:BB:CC:...:99` (콜론 구분 16진수).

### prod (`kr.co.withly.android`)

```bash
keytool -list -v \
  -keystore release.jks \
  -alias <KEY_ALIAS> \
  -storepass <KEYSTORE_PASSWORD> \
  | grep "SHA256:"
```

### staging (`kr.co.withly.android.staging`)

```bash
keytool -list -v \
  -keystore staging.jks \
  -alias staging \
  -storepass <STAGING_KEYSTORE_PASSWORD> \
  | grep "SHA256:"
```

### dev (`kr.co.withly.android.dev`) — 개발자별 debug keystore

```bash
keytool -list -v \
  -keystore ~/.android/debug.keystore \
  -alias androiddebugkey \
  -storepass android \
  | grep "SHA256:"
```

> 팀원이 여러 명이면 각자 추출한 값을 dev entry의 배열에 추가.

## 등록 후 검증

배포 후 Google의 Statement List Tester로 검증 가능:
```
https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://withly.co.kr&relation=delegate_permission/common.handle_all_urls
```

## App Links 자동 검증 트리거

prod APK 설치 시 Android가 이 파일을 자동 검증한다. 검증 실패 시 chooser 다이얼로그 fallback.
