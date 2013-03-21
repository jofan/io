
build: components index.js jofan-io.css
	@component build --dev

components: component.json
	@component install --dev

.PHONY: build
