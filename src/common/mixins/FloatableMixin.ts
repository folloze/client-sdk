import {LitElement, html, css} from "lit";

type Constructor<T> = new (...args: any[]) => T;

export declare class IFloatingElement extends LitElement {
    setStartPos(x: number, y: number): void;
    setLayer(layer: number): void;
    getLayer(): number;
    close(e?: Event);
}

export const Floatable = <T extends Constructor<LitElement>>(superClass: T) => {
    class FloatingElement extends superClass implements IFloatingElement {
        static styles = [
            css`
                :host {
                    --floatBoxShadow: 0.1px 1.1px 1.9px -13px rgba(0, 0, 0, 0.045),
                        0.3px 2.5px 4.7px -13px rgba(0, 0, 0, 0.065), 0.5px 4.8px 8.8px -13px rgba(0, 0, 0, 0.08),
                        0.9px 8.5px 15.6px -13px rgba(0, 0, 0, 0.095), 1.7px 15.9px 29.2px -13px rgba(0, 0, 0, 0.115),
                        4px 38px 70px -13px rgba(0, 0, 0, 0.16);

                    --floatBoxBorder: thin solid rgb(103 103 103 / 78%);
                    --outlineShadow: 1px 1px 3px #ccc;

                    //resize: both;
                    pointer-events: all;

                    opacity: 0;
                    transition: opacity 200ms ease-in;
                    position: absolute;
                    top: 100px;
                    left: 150px;
                    z-index: 104;
                    box-shadow: var(--floatBoxShadow);

                    //overflow: hidden;
                    min-width: 300px;
                    min-height: 40px;

                    overflow: visible;
                    max-width: 300px;

                    border-radius: var(--edit-fz-border-radius-small);
                    font-family: Open Sans, serif;
                }
            `,
        ];

        private x: number;
        private y: number;
        private layer: number;

        connectedCallback(): void {
            super.connectedCallback();
            this.addEventListener('close', this.close.bind(this));
        }

        disconnectedCallback(): void {
            this.removeEventListener('close', this.close.bind(this));
            super.disconnectedCallback();
        }

        protected firstUpdated(_changedProperties) {
            super.firstUpdated(_changedProperties);
            setTimeout(() => {
                this.moveToPos();
                this.style.opacity = "1";
            });
            // new ResizeObserver(this.handleResize.bind(this)).observe(this);
        }

        setLayer(layer: number) {
            this.layer = layer;
            // 104 is the default z-index of the floating editor
            this.style.zIndex = (104 + layer).toString();
        }

        getLayer(): number {
            return this.layer;
        }

        close(e?: Event) {
            e?.stopPropagation();
            this.remove();
        }

        setStartPos(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        checkIfYOverflow(y: number, height: number) {
            const viewPortHeight =
                Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) + window.scrollY;

            return y + height > viewPortHeight - 5;
        }

        getY() {
            return this.y + 30 + window.scrollY;
        }

        getYWithOverflow(height: number) {
            return this.y - height - 30 + window.scrollY;
        }

        moveToPos() {
            if (!this.x || !this.y) {
                return;
            }

            const rect = this.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const bounds = document.body.getBoundingClientRect();
            const viewPortWidth = bounds.width;

            // calculate new X position
            let newX = this.x - width / 2;
            if (newX < 5) {
                newX = 5;
            } else if (newX + width > viewPortWidth - 5) {
                newX = viewPortWidth - width - 5;
            }

            // calculate new Y position in case of out of viewport
            let newY = this.getY();
            if (this.checkIfYOverflow(newY, height)) {
                newY = this.getYWithOverflow(height);
            }

            // if its going to be out of the top of the viewport then move it inside
            const viewPortScrollYPos = window.scrollY + 60; // 60 is the height of the top-bar
            if (newY <= viewPortScrollYPos) {
                newY += viewPortScrollYPos - newY + 3; // 3 is for nice space above

                const x1 = newX;
                const x2 = newX + rect.width;
                const y1 = newY - window.scrollY;
                const y2 = y1 + rect.height;

                // check if its under the mouse and move to the side
                if (x1 < this.x && this.x < x2 && y1 < this.y && this.y < y2) {
                    const centerXofViewPort = viewPortWidth / 2;
                    if (this.x < centerXofViewPort) {
                        newX += x2 - this.x + 30;
                    } else {
                        newX -= x2 - this.x + 30;
                    }
                }
            }

            this.style.top = `${newY}px`;
            this.style.left = `${newX}px`;
        }

        // handleResize() {
        //     if (!this.y) {
        //         return;
        //     }

        //     const rect = this.getBoundingClientRect();
        //     const height = rect.height;

        //     let newY = this.getY();
        //     let newTop = parseInt(this.style.top.replace("px", ""));
        //     if (this.checkIfYOverflow(newY, height)) {
        //         newY = this.getYWithOverflow(height);

        //         if (newY < newTop) {
        //             newTop = newY;
        //         }
        //     }

        //     this.style.top = `${newTop}px`;
        // }
    }
    return FloatingElement as Constructor<IFloatingElement> & T;
};
