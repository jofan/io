
build: components index.js jofan-io.css
	@component build --dev --out ./public --name jofan-io

components: component.json
	@component install --dev

.PHONY: build
