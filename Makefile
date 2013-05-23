
build: components index.js jofan-io.css
	@component build --dev --out ./public/build

components: component.json
	@component install --dev

.PHONY: build
