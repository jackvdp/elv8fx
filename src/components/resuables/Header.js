import SocialLinks from "./SocialLinks";

export default function Header({ title, subtitle, image }) {
    return (
        <>
            <div data-vc-full-width="true" data-vc-full-width-init="false" data-vc-stretch-content="true"
                className="vc_row wpb_row vc_row-fluid vc_row-5ca206d07ca3b vc_row-no-padding">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <section className="banner-area banner-area-5ca20673a9716 bsl-right">
                                <SocialLinks />
                                <div className="banner-item tal"
                                    style={{ backgroundImage: `url(${image})` }}>

                                    <div className="bg-overlay">
                                    </div>

                                    <div className="container">
                                        <div className="row align-items-center fixed-height" style={{ height: "575px" }}>
                                            <div className="col">
                                                <div className="heading-block tal">
                                                    <div data-aos="fade-left" className="sub-h">{subtitle}</div>
                                                    <h2 className="h" data-aos="fade-right">
                                                        {title}
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vc_row-full-width vc_clearfix"></div>
        </>
    );
}